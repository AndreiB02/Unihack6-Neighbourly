//const Address = 'info.tm.edu.ro:8088/~abarsescu/Neighbourly';
const Address = 'localhost';
const baseUrl = `http://${Address}/my_database/db_operations.php/`;

export const fetchService = async (neighbourhood_id) => {
    try {
        const response = await fetch(`${baseUrl}/?action=readJoined&table1=service&table2=member&join_on_1=service.creator_id&join_on_2=member.id&fields=service.id,service.name,service.description,service.contact,member.profileImage,member.neighbourhood_id,member.name%20as%20host&member.neighbourhood_id=${neighbourhood_id}`, {
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

export const fetchMyService = async (user_id) => {
    try {
        const response = await fetch(`${baseUrl}/?action=readJoined&table1=service&table2=member&join_on_1=service.creator_id&join_on_2=member.id&fields=service.id,service.name,service.description,service.contact,member.profileImage,member.neighbourhood_id,member.name%20as%20host&member.id=${user_id}`, {
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

export const createService = async (data, user_id) => {
    try {
        const response = await fetch(`${baseUrl}/?action=create&table=service`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                table: "service",
                fields: {
                    name: data.name,        
                    description: data.description,
                    creator_id: user_id,
                    contact: data.contact,
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