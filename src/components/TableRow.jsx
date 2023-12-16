const TableRow = (props) => {
  const { address, cap, city, check, date } = props;
  return (
    <tr>
      <td className="custom-fs-6 text-nowrap">{address}</td>
      <td className="custom-fs-6 text-nowrap">{cap}</td>
      <td className="custom-fs-6 text-nowrap">{city}</td>
      <td className="custom-fs-6 text-nowrap">{check}</td>
      <td className="custom-fs-6 text-nowrap">{date}</td>
    </tr>
  );
};
export default TableRow;
