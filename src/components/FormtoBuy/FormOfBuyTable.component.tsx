export default function FormOfBuyTableComponent({subtitle, price}:{subtitle: string, price: number}) {
  return (
    <table>
      <tbody>
        <tr>
          <td className="text-start">{subtitle}</td>
          <td className="text-end">{price}</td>
        </tr>
      </tbody>
    </table>
  );
}
