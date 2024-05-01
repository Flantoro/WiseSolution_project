class EdgePage{
    get getKelsieProfilePicture(){
        return $('[alt="Kelsie_Anderson"]');
    }

    get getSuccesMessage(){
        return $('[class="c-iaFiUj"] p');
    }

    get getRelatedAcrticlesSection(){
        return $('main section').last();
    }

    async fillEmailInput(email){
        $('[id="Email"]').setValue(email);
    }

    async clickSubscribeButton(){
        $('[type="submit"]').click();
    }

    async scrollToEmailInput(){
        $('[id="Email"]').scrollIntoView();
    }

    async scrollToRelatedArticleSection(){
       this.getRelatedAcrticlesSection.scrollIntoView();
    }
}

export default new EdgePage();