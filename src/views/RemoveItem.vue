<template>
  <div id="listSearch" class="container">
    <div>
      <h1>Removed Data</h1>
      <div class="row">
        <div class="col-12 mt-4">
          <div class="tableFixedHeader">
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th width="10%">No.</th>
                  <th width="20%" scope="col">Title</th>
                  <th width="30%" scope="col">Description</th>
                  <th width="20%" scope="col">Date Created</th>
                  <th width="20%" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="listDataLike.length">
                  <tr v-for="(item, index) in listDataLike" :key="index">
                    <td width="10%">{{ index + 1 }}</td>
                    <td width="20%">{{ item.title }}</td>
                    <td width="30%">
                      <p class="text">{{ item.description }}</p>
                    </td>
                    <td width="20%">{{ $date(item.date_created) }}</td>
                    <td width="20%">
                      <div>
                        <button
                          class="btn btn-danger"
                          @click="undoData(item)"
                        >
                          Undo
                        </button>
                      </div>
                    </td>
                  </tr>
                </template>
                <tr v-else>
                  <td colspan="4" class="text-center">
                    <p>No data</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RemoveData",

  computed: {
    listDataLike() {
      return this.$store.getters.listDataRemove;
    },
  },
  methods: {
    undoData(item) {
      this.$store.dispatch("undoData", item);
    },
  },
};
</script>