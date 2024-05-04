# Weather Web App

This web application allows users to view weather details of different cities and search for weather details of a particular city.

## UI Layout Structure

1. Two tables:
   a. Single column "City List" table on the left
   b. 6 column "Details" table
2. Clickable buttons:
   a. "Get Weather"
   b. "Search"
3. Display "No Data" message if no data is present in the table.
4. Background Color for headers and buttons: `#4472C4`.
5. Text Color for headers and buttons: `#ffffff`.
6. Text colors for rows content, "No Data" message: `#000000`.
7. Border color for rows: `#000000`.

## User Interaction and Flow

1. Click on the "Get Weather" button.
2. The first row in the "City List" table is highlighted.
3. Fetch JSON information from the API using GET method.
4. URL: `https://python3-dot-parul-arena-2.appspot.com/test?cityname=<city_name>`
5. Insert weather information into the "Details" table.
6. Highlight the next city and repeat steps 2-5.

### Additional Functionality

1. Clicking the "Delete" button deletes the row.
2. Table data is stored in a dictionary / JS object as rows are added.
3. "Search": Enter a city name in the search input box and click "Search". If the city name is present in the "Details" table, highlight the row in yellow for 3 seconds.
