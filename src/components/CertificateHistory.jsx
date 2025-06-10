import '../css/CertificateHistory.css'
function CertificateHistory() {
    return (<>
        <h3 className="certificate-history">История справок</h3>
    <table className="reference-history">
        <thead>
        <tr>
            <th>№</th>
            <th>Период</th>
            <th>Статус</th>

        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>01.05–03.05</td>
            <td>Подтверждена</td>
        </tr>
        <tr>
            <td>2</td>
            <td>10.04–12.04</td>
            <td>Отклонена</td>
        </tr>
        </tbody>
    </table>
        </>
    );
}

export default CertificateHistory;