<template>
    <div class="d-flex flex-column">
        <img src="../assets/event.png" />
        <div class="d-flex flex-column pt-3">
            <div class="d-flex justify-content-between content">
                <h2 class="text-sm-2 txt-semi col event-name text-capitalize">
                    {{ eventName }}
                </h2>
                <div class="col event-text">
                    <h4 class="text-sm-1 txt-medium pb-2 text-capitalize">
                        {{ date }}
                    </h4>
                    <h4 class="text-sm-1 txt-medium text-uppercase">
                        {{ time }} WIB
                    </h4>
                </div>
            </div>
            <div class="d-flex justify-content-between pt-3 content">
                <div
                    class="tag text-sm-1 txt-semi d-flex text-uppercase align-items-center"
                >
                    {{ status }}
                </div>
                <h4 class="text-sm-1 txt-regular event-text">
                    {{ location }}
                </h4>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: "EventCard",
    props: ["eventName", "location", "status", "date", "time"],
};
</script>

<style>
.event-name {
    text-align: left;
}

.event-text {
    text-align: right;
    padding-left: 12px;
}

@media only screen and (max-width: 768px) {
    .content {
        flex-direction: column;
    }

    .event-name {
        text-align: center;
        padding-bottom: 12px;
    }

    .event-text {
        text-align: left;
        padding-left: 0px;
        padding-top: 8px;
    }
}
</style>
