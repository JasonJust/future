<template>
  <el-table :data="tableData"
            max-height="348">
    <el-table-column label="id" prop="id" width="80" show-overflow-tooltip></el-table-column>
    <el-table-column label="名称" prop="name" width="150" show-overflow-tooltip></el-table-column>
    <el-table-column label="类型" prop="type" width="200" show-overflow-tooltip>
      <template slot-scope="scope">
        {{scope.row.type.join('、')}}
      </template>
    </el-table-column>
    <el-table-column label="价格" prop="price" width="80" show-overflow-tooltip>
      <template slot-scope="scope">
        {{'￥' + scope.row.price}}
      </template>
    </el-table-column>
    <el-table-column label="描述" prop="desc" show-overflow-tooltip>
      <template slot-scope="scope">
        {{scope.row.details ? scope.row.details.filter(i => i.label === '简介')[0].value.join('、') : ''}}
      </template>
    </el-table-column>
    <el-table-column label="操作" width="120">
      <template slot-scope="scope">
        <el-link type="primary" @click="scope">编辑</el-link>
        <el-link type="danger" @click="deleteDrink(scope.row.id)">删除</el-link>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { goods } from '@/assets/js/dataList'
export default {
  name: 'TableView',
  data () {
    return {
      tableData: goods.drinkData
    }
  },
  methods: {
    deleteDrink (id) {
      this.tableData = this.tableData.filter((i) => {
        return i.id !== id
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";

  .el-table {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #f0f0f0;
    box-shadow: 5px 2px 15px #f0f0f0;

    /deep/ .el-table--scrollable-y .el-table__body-wrapper {
      @include scroll($bg: #f0f0f0, $thumb: #999);
    }

    .el-link:first-child {
      margin-right: $gap;
    }

    .el-link.is-underline:hover:after {
      border: none;
    }
  }
</style>
