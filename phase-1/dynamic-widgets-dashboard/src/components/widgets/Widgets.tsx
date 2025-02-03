import { useState } from "react";
import "./widgets.css";
import Widget from "../widget/Widget";
import Modal from "../modal/Modal";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

interface Widgets {
  id: number;
  type: string;
  title: string;
}

const Widgets = () => {
  const [widgets, setWidgets] = useState<Widgets[] | []>([
    { id: 1, type: "users", title: "Total Users" },
    { id: 2, type: "revenue", title: "Revenue" },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleAdd = (data: { title: string; type: string }) => {
    const { title, type } = data;
    const newWidget = { id: Date.now(), title, type };
    setWidgets((prev) => [...prev, newWidget]);
  };

  const onRemove = (id: number) => {
    const filteredWidgets = widgets.filter((widget) => {
      return widget?.id != id;
    });

    setWidgets(filteredWidgets);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = widgets.findIndex((widget) => widget.id === active.id);
      const newIndex = widgets.findIndex((widget) => widget.id === over.id);
      setWidgets(arrayMove(widgets, oldIndex, newIndex));
    }
  };

  return (
    <>
      {isModalOpen && <Modal onClose={handleModalClose} onAdd={handleAdd} />}
      <div className="container">
        <button className="button_add" onClick={() => setModalOpen(true)}>
          Add widget
        </button>

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={widgets}>
          <div className="widgets_container">
            {widgets.map((widget) => (
              <Widget
                key={widget.id}
                id={widget.id}
                title={widget.title}
                type={widget.type}
                onRemove={onRemove}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      </div>
    </>
  );
};

export default Widgets;
