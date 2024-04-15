const timeTable = [
     {
          monday: [
               { time: "09:40 AM", class: "Maths", mentor: "Ashish Mishra" },
               { time: "10:30 AM", class: "G1 / G2", mentor: "IOT Lab / Electronics Lab" },
               { time: "11:20 AM", class: "G1 / G2", mentor: "IOT Lab / Electronics Lab" },
               { time: "01:10 PM", class: "Mechanical", mentor: "Anupam Gautam" },
               { time: "02:00 PM", class: "Tutorials", mentor: "Ashish Mishra / Sandeep Gautam" },
               { time: "02:50 PM", class: "G1 / G2", mentor: "Chemistry Lab / Mechanical Lab" },
               { time: "03:40 PM", class: "G1 / G2", mentor: "Chemistry Lab / Mechanical Lab" }
          ]
     },
     {
          tuesday: [
               { time: "09:40 AM", class: "Chemistry", mentor: "Rachna Sharma" },
               { time: "10:30 AM", class: "Electronics", mentor: "Sandeep Gautam" },
               { time: "11:30 AM", class: "Mechanical", mentor: "Anupam Gautam" },
               { time: "01:10 PM", class: "Chemistry", mentor: "Rachna Sharma" },
               { time: "02:00 PM", class: "Tutorials", mentor: "Rachna Sharma / Anupam Gautam" },
               { time: "02:50 PM", class: "G1 / G2", mentor: "Mechanical Lab / Chemistry Lab" },
               { time: "03:40 PM", class: "G1 / G2", mentor: "Mechanical Lab / Chemistry Lab" },
          ]
     },
     {
          wednesday: [
               { time: "09:40 AM", class: "Electronics", mentor: "Sandeep Gautam" },
               { time: "10:30 AM", class: "Chemistry", mentor: "Rachna Sharma" },
               { time: "11:30 AM", class: "Maths", mentor: "Ashish Mishra" },
               { time: "01:10 PM", class: "G1 / G2", mentor: "English Lab / Workshop" },
               { time: "02:00 PM", class: "G1 / G2", mentor: "English Lab / Workshop" },
               { time: "02:50 PM", class: "Tutorials", mentor: "Ashish Mishra / Sandeep Gautam" },
               { time: "03:40 PM", class: "G1 & G2", mentor: "Library" }
          ]
     },
     {
          thursday: [
               { time: "09:40 AM", class: "Maths", mentor: "Ashish Mishra" },
               { time: "10:30 AM", class: "Electronics", mentor: "Sandeep Gautam" },
               { time: "11:30 AM", class: "Electronics", mentor: "Sandeep Gautam" },
               { time: "01:10 PM", class: "G1 / G2", mentor: "Workshop / English Lab" },
               { time: "02:00 PM", class: "G1 / G2", mentor: "Workshop / English Lab" },
               { time: "02:50 PM", class: "Tutorials", mentor: "Anupam Gautam / Rachna Sharma" },
               { time: "03:40 PM", class: "Mentorship", mentor: "Ashish Mishra / Rachna Sharma" }
          ]
     },
     {
          friday: [
               { time: "09:40 AM", class: "Chemistry", mentor: "Rachna Sharma" },
               { time: "10:30 AM", class: "Electronics", mentor: "Sandeep Gautam" },
               { time: "11:30 AM", class: "Mechanical", mentor: "Anupam Gautam" },
               { time: "01:10 PM", class: "Maths", mentor: "Ashish Mishra" },
               { time: "02:00 PM", class: "Emerging Technogies", mentor: "Devendra Sood" },
               { time: "02:50 PM", class: "G1 / G2", mentor: "Electronics Lab / IOT" },
               { time: "03:40 PM", class: "G1 / G2", mentor: "Electronics Lab / IOT" }
          ]
     },
     {
          saturday: [
               { time: "09:40 AM", class: "Maths", mentor: "Ashish Mishra" },
               { time: "10:30 AM", class: "Mechanical", mentor: "Anupam Gautam" },
               { time: "11:30 AM", class: "Chemistry", mentor: "Rachna Sharma" }
          ]
     }
];

const daySelect = document.getElementById('day-select');
const tableBody = document.getElementById('timetable').getElementsByTagName('tbody')[0];

const populateTable = (day) => {
     tableBody.innerHTML = ''; // Clear previous content

     const schedule = timeTable.find(item => item[day]);
     if (schedule) {
          schedule[day].forEach(item => {
               const row = document.createElement('tr');
               row.innerHTML = `<td>${item.time}</td><td>${item.class}</td><td>${item.mentor}</td>`;
               tableBody.appendChild(row);
          });
     } else {
          const row = document.createElement('tr');
          row.innerHTML = `<td colspan="3">No schedule available for ${day}</td>`;
          tableBody.appendChild(row);
     }
};

// Set initial day based on current date (with Sunday as 0)
let today = new Date().getDay();
if (today === 0) {
     today = 6;
}
daySelect.value = Object.keys(timeTable[today - 1])[0];
populateTable(daySelect.value); // Show initial schedule

daySelect.addEventListener('change', (event) => {
     populateTable(event.target.value);
});


document.querySelector(".din").textContent = `Date - ${new Date().getDate()}`;