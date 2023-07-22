import "./btn-comp.css";
export default function index({ bg, fontColor, children }) {
  return (
    <div
      style={{
        backgroundColor: `var(${bg})`,
        color: `var(${fontColor})`,
      }}
      className="btn-component"
    >
      {children}
    </div>
  );
}
