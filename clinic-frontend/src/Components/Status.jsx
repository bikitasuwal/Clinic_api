const statusStyles = {
  Pending: {
    background: "#fef9c3",
    color: "#854d0e",
    border: "1px solid #fde047",
  },
  Approved: {
    background: "#dcfce7",
    color: "#166534",
    border: "1px solid #86efac",
  },
  Completed: {
    background: "#f3f4f6",
    color: "#374151",
    border: "1px solid #d1d5db",
  },
  Cancelled: {
    background: "#fee2e2",
    color: "#991b1b",
    border: "1px solid #fca5a5",
  },
  Rescheduled: {
    background: "#dbeafe",
    color: "#1e40af",
    border: "1px solid #93c5fd",
  },
};

const Status = ({ status }) => {
  const normalized =
    status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  const style = statusStyles[normalized] || {
    background: "#f3f4f6",
    color: "#374151",
    border: "1px solid #d1d5db",
  };

  return (
    <span
      style={{
        ...style,
        padding: "2px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: "600",
        display: "inline-block",
      }}
    >
      {normalized}
    </span>
  );
};

export default Status;
