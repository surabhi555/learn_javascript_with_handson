const now = new Date(); // Returns current date and time

const specificDate=new Date("2024-12-10")

console.log(specificDate.toDateString());

const dateWithTime = new Date(2024, 11, 10, 10, 30, 0);
console.log(dateWithTime.toLocaleString());

// const nowstamp=Date.now(); // Current timestamp
console.log(nowstamp);

//get methods

// now.getFullYear();   // Year (e.g., 2024)
// now.getMonth();      // Month (0-11)
// now.getDate();       // Day of the month (1-31)
// now.getDay();        // Day of the week (0 for Sunday, 6 for Saturday)
// now.getHours();      // Hours (0-23)
// now.getMinutes();    // Minutes (0-59)
// now.getSeconds();    // Seconds (0-59)
// now.getMilliseconds(); // Milliseconds (0-999)
// now.getTime();       // Timestamp (ms since Jan 1, 1970)





// set methods
// now.setFullYear(2025);

// now.setMonth(5); // June (0-indexed)

// now.setDate(15);

// now.setHours(10, 30, 45); // Set hours, minutes, seconds

//localestring
// now.toLocaleDateString("en-US"); // e.g., "12/10/2024"
// now.toLocaleTimeString("en-US"); // e.g., "10:30:00 AM"
// now.toLocaleString("en-US"); // Date and time
//done

