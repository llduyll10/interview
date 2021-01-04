<template>
  <div id="listSearch" class="container">
    <div>
      <h1>List Data</h1>
      <!-- Search  -->

      <div class="row">
        <div class="col-8">
          <form
            @submit.prevent="$store.dispatch('changeKeySearch', keySearch)"
            class="search-form"
          >
            <label for="search" class="screen-reader-text">Search</label>
            <input
              id="search"
              type="search"
              class="search-input"
              @input="debounceInput"
              placeholder="Enter search terms..."
            />
            <button class="search-button">Search</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-4">
          <div v-if="loading">
            <Loading />
          </div>
          <div v-else class="tableFixedHeader">
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th width="10%">No.</th>
                  <th
                    width="20%"
                    scope="col"
                    @click="sortAZ('Title')"
                    style="cursor: pointer"
                  >
                    Title
                    <template v-if="columnSort === 'Title'">
                      <i v-if="typeSort === 'asc'" class="fa fa-arrow-down"></i>
                      <i v-else class="fa fa-arrow-up"></i>
                    </template>
                  </th>
                  <th width="30%" scope="col">Description</th>
                  <th
                    width="20%"
                    scope="col"
                    @click="sortDate('Date')"
                    style="cursor: pointer"
                  >
                    Date Created
                    <template v-if="columnSort === 'Date'">
                      <i v-if="typeSort === 'asc'" class="fa fa-arrow-down"></i>
                      <i v-else class="fa fa-arrow-up"></i>
                    </template>
                  </th>
                  <th width="20%" scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="listData.items.length">
                  <tr v-for="(item, index) in listData.items" :key="index">
                    <td width="10%">{{index + 1}}</td>
                    <td width="20%">{{ item.data[0].title }}</td>
                    <td width="30%">
                      <p class="text">{{ item.data[0].description }}</p>
                    </td>
                    <td width="20%">{{ $date(item.data[0].date_created) }}</td>
                    <td width="20%">
                      <div>
                        
                        <button v-if="item.data[0].isLike" class="btn btn-primary" @click="unlikeData(item)">
                          <span >Unlike</span>
                        </button>
                         <button v-else class="btn btn-primary" @click="likeData(item)">
                          <span >Like</span>
                        </button>
                        <button v-if="item.data[0].isDelete" class="btn btn-danger ml-2" @click="undoData(item)">
                          <span >Undo</span>
                        </button>
                        <button v-else class="btn btn-danger ml-2" @click="removeData(item)">
                          <span >Remove</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </template>
                <tr v-else>
                  <td colspan="5" class="text-center">
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
import _ from "lodash";
import Loading from "../components/Loading";
export default {
  name: "ListData",
  components: { Loading },
  data() {
    return {
      keySearch: "",
      typeSort: "asc",
      columnSort: "Title",
    };
  },
  computed: {
    listData() {
      return this.$store.getters.listData;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  methods: {
    debounceInput: _.debounce(function (e) {
      this.keySearch = e.target.value;
    }, 300),
    sortAZ(column) {
      this.typeSort = this.typeSort === "asc" ? "desc" : "asc";
      this.columnSort = column;
      if (this.typeSort === "desc") {
        this.listData.items = _.sortBy(
          this.listData.items,
          [(item) => item.data[0].title.toLowerCase()],
          ["desc"]
        ).reverse();
      } else {
        this.listData.items = _.sortBy(
          this.listData.items,
          [(item) => item.data[0].title.toLowerCase()],
          ["asc"]
        );
      }
    },
    sortDate(column) {
      this.typeSort = this.typeSort === "asc" ? "desc" : "asc";
      this.columnSort = column;
      if (this.typeSort === "desc") {
        this.listData.items = _.sortBy(
          this.listData.items,
          [(item) => Date.parse(item.data[0].date_created)],
          ["desc"]
        ).reverse();
      } else {
        this.listData.items = _.sortBy(
          this.listData.items,
          [(item) => Date.parse(item.data[0].date_created)],
          ["asc"]
        );
      }
    },
    likeData(item){
      this.$store.dispatch('likeData',item.data[0])
    },
    unlikeData(item){
      this.$store.dispatch('unlikeData',item.data[0])
    },
    removeData(item){
      this.$store.dispatch('removeData',item.data[0])
    },
    undoData(item){
      this.$store.dispatch('undoData',item.data[0])
    }
  },
};
</script>