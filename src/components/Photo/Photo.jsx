const Photo = ({ photo }) => {
  return (
    <>
      <img
        // onClick={() => document.getElementById("my_modal_5").showModal()}
        className="hover:scale-125 transition duration-50 ease-in-out"
        key={photo.id}
        src={photo?.image}
        alt="Image"
      />
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* <img src={photo?.image} alt="" /> */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Photo;
