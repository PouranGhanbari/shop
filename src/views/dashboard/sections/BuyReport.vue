<template>
    <div>
        <a-card style="width: 300px;border-radius: 20px;">
            <div class="icon-sale-report">
                <div class="month">
                    <DownCircleOutlined />
                    <h6>
                        Week
                    </h6>
                </div>

                <h3>Buy Report</h3>
            </div>
            <!-- -------- -->
            <div class="chart-pi">
                <img src="@/assets/img/pic-chart.jpg" alt="chart">
            </div>

        </a-card>
    </div>
</template>

<script lang="ts" setup>
import { DownCircleOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const discountPercentage = ref<number>(23)
const discountAmount = ref<number>(343)
</script>

<style>
.icon-sale-report ,.month {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}


</style>