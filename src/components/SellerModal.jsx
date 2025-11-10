
function SellerModal({ sellerInfo }) {



  return (
    <dialog id="seller-modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-md text-center p-8 space-y-6">
        {/* Header */}
        <h3 className="text-2xl font-bold text-primary">Seller Information</h3>

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="avatar">
            <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
              <img src={sellerInfo.photo} alt={sellerInfo.name} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Seller Info */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">{sellerInfo.name}</h2>
          <p className="text-gray-600">{sellerInfo.email}</p>
          <p className="text-gray-500">
            Member Since:{" "}
            {new Date(sellerInfo.created_at).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
            })}
          </p>
        </div>

        {/* Action Button */}
        <div className="modal-action justify-center">
          <form method="dialog">
            <button className="btn btn-primary text-white w-full sm:w-auto">Close</button>
          </form>
        </div>
        
      </div>
    </dialog>
  );
}

export default SellerModal;
