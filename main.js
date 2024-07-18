document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById('calendar');
    const eventDetailsEl = document.getElementById('event-details');
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    $(calendarEl).fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true,
      displayEventTime: false, // Disable default time rendering
      events: [
        {
          title: 'Wikid Tasting',
          start: '2024-07-19T16:00:00',
          end: '2024-07-19T19:00:00',
          description: 'Join us for an exclusive wikid tasting event featuring premium selections of THC products.'
        },
        {
          title: 'Wabasha Tasting',
          start: '2024-07-20T16:00:00',
          end: '2024-07-20T19:00:00',
          description: 'Enjoy an evening of craft beer tasting with a variety of fine crafts from local Wabasha brewery.'
        },
        {
          title: 'Urban Growler Tasting',
          start: '2024-07-26T16:00:00',
          end: '2024-07-26T19:00:00',
          description: 'Enjoy an evening of craft beer tasting with a variety of fine crafts from local Urban Growler brewery.'
        }
      ],
      eventRender: function(event, element) {
        // Customize the event title to include the start and end times
        const timeRange = moment(event.start).format('h:mm a') + " - " + moment(event.end).format('h:mm a');
        element.find('.fc-title').text(`${event.title} (${timeRange})`);
      },
      eventClick: function(event) {
        // Display event details below the calendar
        const details = `
          <h3>${event.title}</h3>
          <p><strong>Time:</strong> ${moment(event.start).format('h:mm a')} - ${moment(event.end).format('h:mm a')}</p>
          <p>${event.description}</p>
        `;
        eventDetailsEl.innerHTML = details;
        eventDetailsEl.style.display = 'block';
      }
    });

    hamburger.addEventListener("click", function () {
      const isOpen = nav.style.display === "block";
      nav.style.display = isOpen ? "none" : "block";
      hamburger.setAttribute("aria-expanded", !isOpen);
    });
  });