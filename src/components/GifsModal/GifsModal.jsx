import "./GifsModal.css";

export default function GifsModal({ setshowGifsModal }) {
  return (
    <div className="modal-container" onClick={() => setshowGifsModal(false)}>
      <div className="gif-modal"> GifsModal</div>
    </div>
  );
}
