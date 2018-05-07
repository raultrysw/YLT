import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("course", ["subjects"]),
    payloadUnit() {
      const query = this.$route.query;
      let unit = this.subjects[query.subject].units[query.unit].name;
      let subject = this.subjects[query.subject].name;
      return { unit, subject };
    }
  }
};
