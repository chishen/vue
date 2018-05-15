<template>
  <div id="PlatformAccount">
    <div class="part1">
      <span>平台账号</span><el-button type="primary" size="small">添加账号</el-button>
    </div>
    <!--<cs-button></cs-button>-->
    <div class="part2">
      <input-title style="margin-right: 16px;">状态</input-title>
      <el-select v-model="value2" placeholder="请选择" size="small" style="width: 80px;">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <input-title style="margin-right: 16px;margin-left: 16px;">创建时间</input-title>
      <div class="block">
        <el-date-picker
          style="width: 200px;"
          size="small"
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <input-title style="margin-right: 16px;margin-left: 16px;">快速搜索</input-title>
      <el-input v-model="input" placeholder="姓名/手机号/部门/职位" style="width: 220px;" size="small"></el-input>
      <el-button type="primary" icon="el-icon-search" size="small" style="margin-left: 16px;"></el-button>
    </div>
    <div class="part3">
      <el-table
        size="small"
        :data="tableData"
        style="width: 100%;border: 1px solid #ebeef5">
        <el-table-column
          prop="realName"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="手机号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="operating"
          label="操作">
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange"
        background
        style="text-align: right;margin-top: 16px;"
        layout="prev, pager, next"
        :total="30">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import InputTitle from '../components/InputTitle';
  export default {
    name: 'platform-account',
    components: {
      'input-title': InputTitle,
    },
    data() {
      return {
        options2: [
          {
          value: '',
          label: '请选择',
          disabled: true
        }, {
          value: 'all',
          label: '全部'
        }, {
          value: '1',
          label: '启用'
        }, {
          value: '2',
          label: '停用'
        }],
        value2: 'all',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        input: '',
        tableData: []
      }
    },
    created: function () {
      this.$options.methods.submitForm.bind(this)(1);
    },
    methods: {
      submitForm(currentPage){
        this.$ajax({
          method: 'get',
          url: '/json/PlatformAccount.json',
          data: {
          }
        }).then((res) => {
          this.tableData = res.data.data.list.splice((currentPage-1)*10,10);
        })
      },
      handleCurrentChange(currentPage){
        this.$options.methods.submitForm.bind(this)(currentPage);
      },
    }
  }
</script>

<style scoped lang="less">
  @import '~less-vars';
  .part1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }
  }
  .part2{
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
  }
  /*.el-table{*/
    /*th,td{*/
      /*height: 38px;*/
      /*line-height: 38px;*/
    /*}*/
  /*}*/
</style>
