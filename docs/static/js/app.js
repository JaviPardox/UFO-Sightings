// from data.js
var tableData = data;

// Get table references
const tbody = d3.select("tbody");

function build_table(data) 
{
    // Clear any existing data
    tbody.html(""); 

    // For each object in the data, append a row and cells for each value in the row
    data.forEach((dataRow) => {
        
        // Append row
        const row = tbody.append("tr");
        
        // Add all values
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);    
        });
    });
}

function filter_data()
{
    // Get datetime value from filter
    const date = d3.select("#datetime").property("value");
    let filtered_data = tableData;

    // If there is a date
    if(date)
    {
        // Apply filter
        filtered_data = filtered_data.filter(row => row.datetime === date);
    }

    // Build table again
    build_table(filtered_data);
}

// Handle button trigger
d3.selectAll("#filter-btn").on("click", filter_data);

// Build table at the start
build_table(tableData);