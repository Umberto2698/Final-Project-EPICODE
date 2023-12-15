const TableRow = (props) => {
  const { address, check, date } = props;
  return (
    <tr>
      <td className="custom-fs-6 text-nowrap">{address}</td>
      <td className="custom-fs-6 text-nowrap">{check}</td>
      <td className="custom-fs-6 text-nowrap">{date}</td>
      <td className="custom-fs-6 text-nowrap">10:30</td>
    </tr>
  );
};
export default TableRow;
