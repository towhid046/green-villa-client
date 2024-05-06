const MyEstate = ({ estate }) => {
  const { email, image, estate_title, status } = estate;
  return (
    <tr>
      <td>
        <button className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{email}</div>
          </div>
        </div>
      </td>
      <td>{estate_title}</td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">{status}</button>
      </th>
    </tr>
  );
};

export default MyEstate;
