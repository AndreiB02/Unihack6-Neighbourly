const Address = 'info.tm.edu.ro:8088/~abarsescu/Neighbourly';
// const Address = 'localhost';
const baseUrl = `http://${Address}/my_database/db_operations.php/`;

export const fetchProblems = async (neighbourhood_id) => {

    try {
        const response = await fetch(`${baseUrl}/?action=readJoined&table1=problem&table2=member&join_on_1=problem.creator_id&join_on_2=member.id&fields=problem.id,problem.name,problem.description,problem.contact,problem.solved,member.profileImage,member.phone,member.neighbourhood_id,member.name%20as%20host&member.neighbourhood_id=${neighbourhood_id}&problem.solved=0`, {
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

export const fetchMyProblems = async (user_id) => {

    try {
        const response = await fetch(`${baseUrl}/?action=readJoined&table1=problem&table2=member&join_on_1=problem.creator_id&join_on_2=member.id&fields=problem.id,problem.name,problem.description,problem.contact,problem.solved,member.profileImage,member.neighbourhood_id,member.name%20as%20host&member.id=${user_id}`, {
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

export const createProblem = async (data, user_id) => {
    try {
        const response = await fetch(`${baseUrl}/?action=create&table=problem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                table: "problem",
                fields: {
                    name: data.name,        
                    description: data.description,
                    contact: data.contact,
                    creator_id: user_id,
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