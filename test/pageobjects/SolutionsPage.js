class SolutionsPage{
    get getMainTitle(){
        return $('main h1');
    }

    get getTravelMainTitle(){
        return $('main h1');
    }

    async scrollToTravelSection(){
        $('[alt="Travel destination"]').scrollIntoView();
    }

    async clickTravelSection(){
        $('[alt="Travel destination"]').click();
    }
}

export default new SolutionsPage();