// import { defineStore } from "pinia";
// import { get_call_module, post_call_module, put_call_module, delete_call_module } from "src/utils/module_call";

// export const useAuthorStore = defineStore("author", {
//   state: () => ({
//     allAuthors: [],
 
//   }),

//   actions: {
//     async fetchAuthor() {
//       const res = await get_call_module("author");    
  
//       this.allAuthors =res?.data;
//       console.log("rtyu c", res?.data);
//       return this.allAuthors;
//     },
//     async createAuthor(cont) {
//       const res_create_author = await post_call_module(cont,"author");

//       return res_create_author;
//     },

//     async updateAuthor(tid, cont) {
//       const res_update_author = await put_call_module(cont,"author", tid);
// console.log("heyo");
//       return res_update_author;
//     },
//     async deleteAuthor(tid) {
//       const res_delete_author = await delete_call_module("author",tid);

//       return res_delete_author;
//     },







//     async fetchGroups() {
//       const resw = await get_call_module("groups");

//       this.allGroups = resw?.data;
//       console.log("rtyu fg", this.allGroups);
//       return this.allGroups;
//     },
//     async createGroups(groupData) {
//       console.log("mygn",groupData);

//       const res_create_group = await post_call_module(groupData,"groups");
// console.log("myg",groupData);
//       return res_create_group;
//     },

//     async updateGroups(tid,cont) {
//       const res_update_group = await put_call_module(cont,"groups", tid);

//       return res_update_group;
//     },

//     async deleteGroups(tid) {
//       const res_delete_group = await delete_call_module("groups",tid);

//       return res_delete_group;
//     },
//     async addContacts() {
//       const resw = await get_call_module("groups");

//       this.allGroups = resw;
//       console.log("rtyu g", this.allGroups);
//       return this.allGroups;
//     },
//     async removeContacts() {
//       const resw = await get_call_module("groups");

//       this.allGroups = resw;
//       console.log("rtyu g", this.allGroups);
//       return this.allGroups;
//     },
//   },
// });