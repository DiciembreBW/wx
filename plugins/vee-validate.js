import Vue from 'vue';
import VeeValidate, {Validator} from 'vee-validate';


const dict = {
    en: {
        messages: {
            email: () => 'กรุณาใส่อีเมลล์',
            required: () => 'กรุณากรอกข้อมูล',
            alpha: () => 'พิมพ์ตัวอักษร',
            numeric: () => 'พิมพ์ตัวเลข',
            max: (field, length) => 'ใส่ข้อมูลเกิน ' + length + ' ตัว'
        }
    }
}

Validator.localize(dict)

Vue.use(VeeValidate);
