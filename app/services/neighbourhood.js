// const Address = 'info.tm.edu.ro:8088/~abarsescu/Neighbourly';
const Address = 'localhost';
const baseUrl = `http://${Address}/my_database/db_operations.php/`;

export const fetchNeighbourhood = async (id) => {

    try {
        console.log(`${baseUrl}/?action=read&table=neighbourhood&id=${id}`);
        const response = await fetch(`${baseUrl}/?action=read&table=neighbourhood&id=${id}`, {
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
        console.error('Error fetching neighbourhood', error);
    }
};

export const fetchNeighbourhoodData = async () => {

    try {
        console.log(`${baseUrl}/?action=read&table=neighbourhood`);
        const response = await fetch(`${baseUrl}/?action=read&table=neighbourhood`, {
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
        console.error('Error fetching neighbourhood', error);
    }
};