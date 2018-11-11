<template>
    <div class="container">
        <h1 class="title is-1">Brand</h1>
        <section class="section">
            <div class="columns">
                <div class="column">
                    <ul>
                        <li v-for="(item, index) in dumb" :key="index">
                            {{item.name}}
                        </li>
                    </ul>
                </div>
                <div class="column is-two-thirds">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae animi dignissimos atque explicabo, quod delectus rerum vero aperiam optio unde, quis placeat tempora quidem! Assumenda, ullam ex. Natus, quaerat.
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                dumb: [
                    {name: 'Smith', address: 'New York'}, {name: 'John', address: 'Losanglerit'}, {name: 'Lorah', address: 'Woodland'},
                ]
            }
        }
    }
</script>