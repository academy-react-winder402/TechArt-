import React, { useState } from "react";
import Calendar from "react-calendar";
import ReactModal from "react-modal";

const MyCalendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "کلاس ریاضی",
      start: new Date(2024, 4, 5, 10, 0),
      end: new Date(2024, 4, 5, 12, 0),
      description: "موضوع: اعداد مختلط",
    },
    {
      title: "کلاس علوم",
      start: new Date(2024, 4, 5, 14, 0),
      end: new Date(2024, 4, 5, 16, 0),
      description: "موضوع: انرژی و کار",
    },
    // سایر رویدادها ادامه دارد...
  ];

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">تقویم برنامه کلاس‌ها</h1>
      <Calendar
        onClickDay={(date) => {
          const event = events.find((event) => {
            const eventDate = event.start.toISOString().slice(0, 10);
            return eventDate === date.toISOString().slice(0, 10);
          });
          if (event) {
            openModal(event);
          }
        }}
      />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Event Modal"
        className="modal bg-white rounded-lg shadow-lg p-6"
        overlayClassName="overlay fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
      >
        <h2 className="text-xl font-bold mb-4">
          {selectedEvent && selectedEvent.title}
        </h2>
        <p className="text-lg mb-4">
          {selectedEvent && selectedEvent.description}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={closeModal}
        >
          بستن
        </button>
      </ReactModal>
    </div>
  );
};

export default MyCalendar;
