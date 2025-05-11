const Address = 'info.tm.edu.ro:8088/~abarsescu/Neighbourly';
// const Address = 'localhost';
const baseUrl = `http://${Address}/my_database/db_operations.php/`;

export const fetchMember = async (neighbourhood_id) => {

    try {
        const response = await fetch(`${baseUrl}/?action=read&table=member&neighbourhood_id=${neighbourhood_id}`, {
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
        console.error('Error fetching member', error);
    }
};

//unused 
export const fetchUser = async (username) => {

    try {
        const response = await fetch(`${baseUrl}/?action=read&table=member&name=${username}`, {
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
        console.error('Error fetching member', error);
    }
};
