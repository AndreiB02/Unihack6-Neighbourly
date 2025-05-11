const Address = 'info.tm.edu.ro:8088/~abarsescu/Neighbourly';
// const Address = 'localhost';
const baseUrl = `http://${Address}/my_database/db_operations.php/`;

export const createMember = async (name,email,password, neighbourhood_id) => {
    try {
        console.log(name,email,password, " --> in createMember");
        const response = await fetch(`${baseUrl}/?action=create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                table: "member",
                fields: {
                    name:name,
                    password:password,
                    email:email,
                    neighbourhood_id: neighbourhood_id,
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
        console.error('Error creating member', error);
        throw error;
    }
};
export const login = async (name) => {
    try {
        const response = await fetch(`${baseUrl}/?action=read&table=member&name=${name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const responseText = await response.text();
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}, response: ${responseText}`);
        }

        const responseData = JSON.parse(responseText);
        console.log("Parsed Response Data:", responseData);

        return responseData;
        
    } catch (error) {
        console.error('Error creating member', error);
        throw error;
    }
};
