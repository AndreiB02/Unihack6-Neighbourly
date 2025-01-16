const Address = '192.168.4.162';
const baseUrl = `http://${Address}/my_database/db_operations.php`;

export const fetchService = async () => {

    try {
        const response = await fetch(`${baseUrl}/?action=read&table=service`, {
            method: 'GET',
        });

        // Check if the response was successful
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching service', error);
    }
};
export const createOffer = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/?action=create&table=service`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                table: "service",
                fields: {
                    name: data.title,        
                    description: data.description,
                    phone: data.phone,
                    author: data.author,
                    is_offered: true,
                    
                }
            })
        });

        const responseText = await response.text();  // Read the response as text first
        console.log("Raw Response Text:", responseText);  // Log the raw response text

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}, response: ${responseText}`);
        }

        // Attempt to parse as JSON
        const responseData = JSON.parse(responseText);
        console.log("Parsed Response Data:", responseData);
        return responseData;
    } catch (error) {
        console.error('Error creating event', error);
        throw error;
    }
};