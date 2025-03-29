const Address = 'info.tm.edu.ro:8088/~abarsescu/Neighbourly';  // Your address here
const baseUrl = `http://${Address}/my_database/db_operations.php`;  // No trailing slash after PHP file

export const getItemIdByName = async (itemName) => {
    try {
        // Make sure to encode the itemName in case it has special characters
        const response = await fetch(`${baseUrl}/?action=getItemByName&table=item&name=${itemName}`);
        const data = await response.json();
        if (data.id) {
            return data.id;  // Return the ID
        } else {
            alert(data.message);  // Show the error message if the item isn't found
        }
    } catch (error) {
        console.error('Error fetching item ID:', error);
    }
};
export const fetchItemById = async (id) => {
    try {
        // Construct the URL with the provided id
        const url = `${baseUrl}/?action=read&table=item&id=${id}`;

        // Send the GET request
        const response = await fetch(url, {
            method: 'GET',
        });

        // Check if the response was successful
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
        }

        // Parse the response data
        const data = await response.json();
        console.log("ITEM BY ID",data);  // You can adjust this for logging or returning the data as needed
        return data;
    } catch (error) {
        console.error('Error fetching item by ID', error);
    }
};
