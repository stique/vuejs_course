<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <app-full-name v-model="fullName"></app-full-name>
                    
                    <!-- Mail -->
                    <input type="email" v-model="email" />
                    <!-- Password -->
                    <input type="password" v-model="password" />
                    <!-- Store Data? Yes/No -->
                    <label for="store-data">
                        <input
                                type="radio"
                                id="store-data"
                                value="Yes"
                                v-model="storeData"> Store data
                    </label>
                    <label for="do-not-store">
                        <input
                                type="radio"
                                id="do-not-store"
                                value="No"
                                v-model="storeData"> Do not store
                    </label>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button @click.prevent="isSubmitted = true">Submit data</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        data() {
            return {
                fullName: '',
                email: '',
                password: '',
                storeData: 'No',
                isSubmitted: false,
            }
        },
        components: {
            appFullName: FullName,
        }
    }
</script>

<style>
</style>
