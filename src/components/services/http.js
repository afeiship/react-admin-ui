import NxAxios from 'next-axios';

const WeiPaiHttp = nx.declare({
  extends: NxAxios,
  statics: {
    instance: null,
    getInstance: function () {
      if (!WeiPaiHttp.instance) {
        WeiPaiHttp.instance = new WeiPaiHttp();
      }
      return WeiPaiHttp.instance;
    }
  },
  methods: {
    init: function () {
      //this.base();
      this.$base.init();
      this.setHeaders({
        common: {
          'Power by': 'Fei de next framework'
        }
      })
    },
    toData: function (inResponse) {
      return inResponse.data;
    }
  }
});

export default WeiPaiHttp.getInstance();



