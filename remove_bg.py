import os
from PIL import Image, ImageFilter, ImageDraw

def remove_background(img_path, output_path, threshold=240, feather_radius=1):
    # Load image and convert to RGBA
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    
    # Create a grayscale mask of the white background
    # We want pixels where R, G, B are all above the threshold
    mask = Image.new("L", (width, height), 0)
    img_data = img.getdata()
    mask_data = []
    
    for pixel in img_data:
        r, g, b, a = pixel
        # If the pixel is very close to white, mark it as potential background (value 255)
        if r >= threshold and g >= threshold and b >= threshold:
            mask_data.append(255)
        else:
            mask_data.append(0)
    
    mask.putdata(mask_data)
    
    # Run flood fill from the corners to find ONLY the connected background
    # This prevents white spots on the dog (like teeth, eyes, or shiny fur) from becoming transparent!
    ImageDraw.floodfill(mask, (0, 0), 255)
    ImageDraw.floodfill(mask, (width - 1, 0), 255)
    ImageDraw.floodfill(mask, (0, height - 1), 255)
    ImageDraw.floodfill(mask, (width - 1, height - 1), 255)
    
    # Now floodfill again, but this time we find all non-background pixels and set them to 0 in our background mask
    # To do this safely: we create a final background mask
    bg_mask = Image.new("L", (width, height), 0)
    # Copy flood-filled mask to bg_mask but only where mask is 255
    bg_mask_data = []
    for val in mask.getdata():
        bg_mask_data.append(val)
    bg_mask.putdata(bg_mask_data)
    
    # Smooth/feather the edges of the background mask
    if feather_radius > 0:
        bg_mask = bg_mask.filter(ImageFilter.GaussianBlur(feather_radius))
        
    # Apply the mask to the image's alpha channel
    new_data = []
    bg_mask_pixels = list(bg_mask.getdata())
    
    for i, pixel in enumerate(img_data):
        r, g, b, a = pixel
        bg_alpha = bg_mask_pixels[i]
        # bg_alpha = 255 means background (should be transparent), 0 means subject (should be opaque)
        # So new alpha is: original_alpha * (1 - bg_alpha / 255)
        new_a = int(a * (1 - bg_alpha / 255))
        new_data.append((r, g, b, new_a))
        
    img.putdata(new_data)
    
    # Let's crop the image to the dog's bounding box so it sits nicely in the hero layout
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    # Save the result
    img.save(output_path, "PNG")
    print(f"Successfully removed background and saved to {output_path}")

if __name__ == "__main__":
    input_img = "/Users/clarkkentuyanguren/.gemini/antigravity-ide/brain/11628a28-c97b-402e-9c05-4591ed5f9fbc/media__1779667707276.png"
    output_img = "/Users/clarkkentuyanguren/Documents/code-files/pet-grooming/public/images/hero_corgi.png"
    remove_background(input_img, output_img, threshold=245, feather_radius=1)
