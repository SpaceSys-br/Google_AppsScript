function createFolders_Drive() {
  // ID da pasta principal onde as subpastas serão criadas
  var mainFolderId = 'ID_PASTA_ANO'; // Substitua pelo ID da sua pasta 

  // Obter a pasta principal
  var mainFolder = DriveApp.getFolderById(mainFolderId);

  // Loop para criar pastas de 2024_01 a 2024_12
  for (var i = 1; i <= 12; i++) {
    var folderName = '2024_' + ('0' + i).slice(-2);
    mainFolder.createFolder(folderName);
  }

  Logger.log('Pastas criadas com sucesso! Corre lá para ver (:');
}