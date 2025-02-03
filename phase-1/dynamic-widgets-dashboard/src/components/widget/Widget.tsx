import "./widget.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Widget {
  id: number;
  type: string;
  title: string;
  onRemove: (id: number) => void;
}

const Widget = (props: Widget) => {
  const { type, title, id, onRemove } = props;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="widget_container"
    >
      <h3>{title}</h3>
      <p>Data for {type} will be displayed here.</p>
      <button className="remove_button" onClick={() => onRemove(id)}>
        Remove
      </button>
    </div>
  );
};

export default Widget;
