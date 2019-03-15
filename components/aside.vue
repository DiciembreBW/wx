<template>
<div class="section">
    <div class="row center-align">
        <p>มีลูกค้าทั้งหมด</p>
        <div> <span id="Month">{{item.length}}</span>  <span>คัน</span> </div>
        <!-- <a class="waves-effect waves-light btn modal-trigger" href="#modal1" id="apps">
            <i class="material-icons">apps</i>
        </a> -->
        <ul>
            <!-- <li> <nuxt-link to="/item">add</nuxt-link> </li> -->
        </ul>
    </div>

    <!-- corp -->
    <div class="row hide-on-small-and-down center-align">
        <div class="col s12 m6">
            <ul>
                <li>กรุงเทพประกันภัย</li>
                <li>คุ้มภัย</li>
                <li>สินทรัพย์ประกันภัย</li>
                <li>ชับบ์สามัคคีประกันภัย</li>
                <li>ทิพยประกันภัย</li>
                <li>เทเวศประกันภัย</li>
                <li>อาคเนย์ประกันภัย</li>
            </ul>
        </div>
        <div class="col s12 m6">
            <ul>
                <li>เมืองไทยประกันภัย</li>
                <li>วิริยะประกันภัย</li>
                <li>สินมั่นคง</li>
                <li>อลิอันซ์ ประกันภัย</li>
                <li>เอเชียประกันภัย</li>
                <li>แอกซ่าประกันภัย</li>
                <li>แอลเอ็มจี ประกันภัย</li>
            </ul>
        </div>
    </div>

    <div class="row">
    </div>
</div>
</template>


<script>
export default {
    data () {
        let Item = new this.$Firestore('items').snapShot()

        return {
            t: false,
            item: Item.$_data
        }
    },
    methods: {
        toggle: function () {
        }
    }
}
</script>
