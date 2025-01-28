/* eslint-disable @typescript-eslint/no-explicit-any */
export const imgBBUploadImage = async (file: any) => {

    const formData = new FormData();
    formData.append("image", file);
    
    
    //console.log("File being uploaded:", file);
    //console.log("File type:", file instanceof File ? 'File is valid' : 'File is not valid');

    // Iterate over formData and log each entry
    // for (let pair of formData.entries()) {
    //     console.log(pair[0] + ': ' + pair[1]);
    // }



    try {
        const response = await fetch(
            `https://api.imgbb.com/1/upload?key=57132ca050c076c83e461c9803dd19c8`,
            {
                method: "POST",
                body: formData
            }
        );

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(`Error uploading image: ${errorDetails.message}`);
        }

        const result = await response.json();
        if (result.success) {
            return result.data.url;
        }

        throw new Error('Failed to upload image');
    } catch (error) {
        console.error('Upload failed:', error);
        throw error;
    }
};