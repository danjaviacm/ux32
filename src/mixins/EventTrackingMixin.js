let EventTrackingMixin = {
    componentDidMount(){
        dataLayer.push({
            event:'pasovistoux31',
            eventLabel: "componentDidMount",
            eventAction: this.context.router.getCurrentPath(),
            value: 1
        });
    }
};

export default EventTrackingMixin