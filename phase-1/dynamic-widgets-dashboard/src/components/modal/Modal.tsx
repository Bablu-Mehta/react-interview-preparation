import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

interface ModalProps {
  onClose: () => void;
  onAdd: (data: { title: string; type: string }) => void;
  // Optionally receive some initial data
  initialData?: { title?: string; type?: string };
}

const Modal: React.FC<ModalProps> = ({ onClose, onAdd, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [type, setType] = useState(initialData?.type || "");

  // Call useEffect unconditionally to disable scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Get the modal container from the DOM.
  const modalContainer = document.getElementById("modal");
  if (!modalContainer) return null;

  // Close modal when clicking on the overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      onClose();
    }
  };

  // Handle form submission.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ title, type });
    onClose();
  };

  const modalContent = (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-header">
          <button className="modal-close" onClick={onClose}>
            X
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-field">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="modal-field">
            <label htmlFor="type">Type</label>
            <input
              id="type"
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="modal-add">
              Add
            </button>
            <button type="button" className="modal-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, modalContainer);
};

export default Modal;
