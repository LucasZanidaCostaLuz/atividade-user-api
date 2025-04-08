const PDFDocument = require("pdfkit");

const UserModel = require("../models/UserModel")

const exportPostPDF = async (req, res) => {
    try {
        const users = await UserModel.getUsuarios();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=users.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatorio de Usuarios", {align: "center"});
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("id | nome | email", {underline: true});
        doc.moveDown(0.5);

        //Add dados dos bruxos
        users.forEach((users) => {
            doc.text(
                `${users.id} | ${users.name} | ${users.email}`
            );
        });

        doc.end(); 
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF"}); 
    }
};

module.exports = { exportPostPDF };