const Address = 'localhost';
const baseUrl = `http://${Address}/my_database/db_operations.php/`;

export const fetchEvents = async () => {

    try {
        const response = await fetch(`${baseUrl}/?action=read&table=event`, {
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
        console.error('Error fetching events', error);
    }
};
export const createEvent = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/?action=create&table=event`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                table: "Event",
                fields: {
                    name: data.title,          // map title to 'name'
                    description: data.description,
                    location: data.location,   // map location to 'location'
                    host: data.organizer,      // map organizer to 'host'
                    phone: data.phone,
                    date: data.date,
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
export const createEventNeeds = async (eventID, needs) => {
    try {
        console.log(needs.total, "TOTAL:");
        const response = await fetch(`${baseUrl}/?action=create&table=eventneeds`, {
            method: 'POST',
            body: JSON.stringify({
                table: "eventneeds",
                fields: {
                    event_id: eventID,
                    item_id: needs.itemId,
                    required_quantity: needs.total,    // Should be a number
                    current_quantity: needs.fulfilled  // Should be a number
                }
            })
        });

        const responseText = await response.text();
        console.log("Raw Response Text for Event Needs:", responseText);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}, response: ${responseText}`);
        }

        const responseData = JSON.parse(responseText);
        console.log("Parsed Response Data for Event Needs:", responseData);
        return responseData;
    } catch (error) {
        console.error('Error creating event needs', error);
        throw error;
    }
};
export const fetchEventItems = async (event_id) => {
    try {
        console.log(`${baseUrl}/?action=read&table=eventneeds&event_id=${event_id}`);
        const response = await fetch(`${baseUrl}/?action=read&table=eventneeds&event_id=${event_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Check if the response was successful
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
        }

        // Parse as JSON and log the parsed response
        const data = await response.json();
        console.log("EVENT ITEMS:", data);
        return data;
    } catch (error) {
        console.error('Error fetching event items:', error);
        throw error;
    }
};


export const updateItemCount = async (id, item, eventId) => {
    try {
        const response = await fetch(`${baseUrl}/?action=update&table=eventneeds`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                table: "eventneeds",
                fields: {
                    event_id: eventId,          // Condition
                    item_id: id,                // Condition
                    required_quantity: item.total,  // Field to update
                    current_quantity: item.fulfilled // Field to update
                }
            })
        });

        // Check if the response was successful
        if (!response.ok) {
            const responseText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, response: ${responseText}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error updating item count', error);
        throw error;
    }
};
