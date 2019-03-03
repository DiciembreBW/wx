<template>
    <div class="section">
        <div class="row">
            <div class="col s10">
                <div class="input-field">
                    <i class="material-icons prefix">search</i>
                    <input id="icon_telephone" type="text" class="validate">
                    <label for="icon_telephone">ค้นหา</label>
                </div>
            </div>
            <div class="col s2">
                <div class="input-field">
                    <i class="material-icons prefix">list</i>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="card horizontal" v-for="(item, index) in 6" :key="index">
                <div class="card-image">
                    <img :src="Faker.image.avatar()" alt="">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <h5> {{Faker.name.findName()}} </h5>
                        <p>{{Faker.address.city()}}</p>
                    </div>
                </div>
                <!-- {{Faker.name.firstName}} -->
            </div>
            <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto voluptas quidem illo accusamus reiciendis inventore quas culpa molestiae maiores ea. Sint velit reiciendis neque ducimus inventore consequuntur debitis animi quia.</p> -->
        </div>
    </div>
</template>

<script>
import Faker from 'faker'

import Firstore from '@/plugins/boydPlugins'
let items = new Firstore('cars')

// console.log(Faker.address.city)
export default {
    data () {
        return {
            Faker: Faker
        }
    }
}
</script>

<style>

</style>
