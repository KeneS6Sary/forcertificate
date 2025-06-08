import './Content.css'

function Content() {
    return (
        <div className="medical-reference-form">
            <h2>📎 Мои справки</h2>

            <div className="upload-section">
                <label htmlFor="file-upload" className="upload-label">
                    📎 Загрузить справку (PDF/JPG/PNG)
                </label>
                <input type="file" id="file-upload" accept=".pdf,.jpg,.jpeg,.png" />
            </div>

            <div className="input-grid">
                <input type="text" placeholder="ФИО" name="fullName" />
                <input type="text" placeholder="ИИН" name="iin" />
                <input type="date" placeholder="Период с" name="dateFrom" />
                <input type="date" placeholder="по" name="dateTo" />
            </div>

            <textarea placeholder="Учреждение" name="institution" rows={3}></textarea>

            <button type="submit" className="submit-button">Отправить справку</button>

            
        </div>


    );
}

export default Content;