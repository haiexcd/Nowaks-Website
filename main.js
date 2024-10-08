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
          title: 'Global Reserve THC Tasting',
          start: '2024-10-11T16:00:00',
          end: '2024-10-11T19:00:00',
          description: 'Join us for an exclusive Global Reserve tasting event featuring premium selections of THC products.'
        },
        {
          title: 'Global Reserve THC Tasting',
          start: '2024-10-19T16:00:00',
          end: '2024-10-19T19:00:00',
          description: 'Join us for an exclusive Global Reserve tasting event featuring premium selections of THC products.'
        },
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