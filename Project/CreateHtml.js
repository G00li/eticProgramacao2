export const CreateHtml = () =>{
    // _______________________________ **  ________________________

    // _______________________________ Image container  ________________________
    const workspace = document.querySelector("#workspace")
    const divImage = document.createElement("div"); 
    divImage.id = "imagem-space";
    workspace.appendChild(divImage); 

    //CRIANDO A DIV IMAGE-CONTAINER
    const imagemContainer = document.createElement("div"); 
    imagemContainer.id = "image-container"; 
    divImage.appendChild(imagemContainer); 

    //CRIANDO A DIV BUTTONS
    const divButtons = document.createElement("div"); 
    divButtons.id = "buttons"; 
    divImage.appendChild(divButtons);

    //CRAINDO O BUTTON1 E BUTTON2
    const button1 = document.createElement("a"); 
    button1.id = "button1";
    const img1 = document.createElement("img"); 
    img1.src="Left.png"; 
    button1.appendChild(img1); 
    divButtons.appendChild(button1);


    const button2 = document.createElement("a"); 
    button2.id = "button2";
    const img2 = document.createElement("img"); 
    img2.src="Right.png"; 
    button2.appendChild(img2); 
    divButtons.appendChild(button2);


    //  _______________________________ Info  ________________________

    const divInfo = document.createElement("div"); 
    divInfo.id = "info";
    workspace.appendChild(divInfo);

    // 

    const divArtDetails = document.createElement("div"); 
    divArtDetails.id = "art-details"; 
    divInfo.appendChild(divArtDetails); 

    const divInfoTitle = document.createElement("div"); 
    divInfoTitle.id= "info-title"; 
    divArtDetails.appendChild(divInfoTitle); 

    // ---------------- ART DETAILS --------------------

    // Titulo Informacoes 
    const h1Information = document.createElement("h1"); 
    h1Information.id = "information-title"; 
    h1Information.textContent = "Information";
    divInfoTitle.appendChild(h1Information);

    //Art Name 

    const divArtName = document.createElement("div"); 
    divArtName.id = "art-name";
    divArtDetails.appendChild(divArtName); 

    const h2ArtNameTitle = document.createElement("h2"); 
    h2ArtNameTitle.id = "artName-title"; 
    h2ArtNameTitle.textContent = "Art name: "; 
    divArtName.appendChild(h2ArtNameTitle); 

    const pNameArt = document.createElement("p"); 
    pNameArt.id = "name-art"; 
    divArtName.appendChild(pNameArt); 


    //Description 

    const divDescription = document.createElement("div"); 
    divDescription.id = "description"; 
    divArtDetails.appendChild(divDescription); 


    const h2DescriptionTitle = document.createElement("h2"); 
    h2DescriptionTitle.id= "description-title"; 
    h2DescriptionTitle.textContent = " Description: "; 
    divDescription.appendChild(h2DescriptionTitle); 


    const pDescriptionText = document.createElement("p"); 
    pDescriptionText.id = "description-text"; 
    divDescription.appendChild(pDescriptionText);



    // ---------------- ARTIST DETAILS --------------------

    // Div principal Info
    const divArtistDetails = document.createElement("div"); 
    divArtistDetails.id = "artist-details"; 
    divInfo.appendChild(divArtistDetails); 

    //DIV artist name 
    const divArtistName = document.createElement("div"); 
    divArtistName.id = "artist-name"; 
    divArtistDetails.appendChild(divArtistName);

    //Artist Name Title
    const divArtistNameTitle = document.createElement("h2"); 
    divArtistNameTitle.id = "artistName-title"; 
    divArtistNameTitle.textContent = "Artist name: "; 
    divArtistName.appendChild(divArtistNameTitle);

    const pName = document.createElement("p"); 
    pName.id = "name"; 
    pName.textContent = "Artist"; 
    divArtistName.appendChild(pName);


    // div art Location 

    const divArtLocation = document.createElement("div"); 
    divArtLocation.id = "art-location"; 
    divArtistDetails.appendChild(divArtLocation);


    const divLocationTitle = document.createElement("h2"); 
    divLocationTitle.id = "location-title"; 
    divLocationTitle.textContent = "Art location: "; 
    divArtLocation.appendChild(divLocationTitle);


    //Input descrição location 
    const pLocationDesc = document.createElement("p"); 
    pLocationDesc.id = "location"; 
    divArtLocation.appendChild(pLocationDesc);



    // ---------------- BUTTON MORE INFO --------------------


    const divMoreInfoButton = document.createElement("div"); 
    divMoreInfoButton.id = "moreInfoButton"; 
    divInfo.appendChild(divMoreInfoButton); 

    const buttonMoreInfo = document.createElement("button"); 
    buttonMoreInfo.id= "moreInfo"; 
    buttonMoreInfo.textContent= "More details";
    divMoreInfoButton.appendChild(buttonMoreInfo); 

    const divMoreInfDiv = document.createElement("div"); 
    divMoreInfDiv.id = "moreInfDiv"; 
    divMoreInfDiv.classList.add("hidden"); 
    divMoreInfoButton.appendChild(divMoreInfDiv); 


    const divDetail1 = document.createElement("div"); 
    divDetail1.id= "detail1"; 
    divMoreInfDiv.appendChild(divDetail1); 



    // _______________________________ ** ________________________ 

}