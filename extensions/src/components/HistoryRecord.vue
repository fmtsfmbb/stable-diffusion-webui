<template>
  <div>
    <ul class="record-container">
      <li v-for="record in records.getRecords()" :key="record.id" class="record">
        <div style="flex: 1">
          <slot :record="record"></slot>
        </div>
        <div class="rec-actions">
          <a-button @click="$emit('reuseRecord', record)" type="primary">{{ $t('restore') }}</a-button>
          <div class="pin" @click="records.switchPin(record)">
            <PushpinFilled /> {{ records.isPinned(record) ? $t('unpin') : $t('pin') }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { PushpinFilled } from '@/icon'
import { HistoryRecord } from '@/util/HistoryRecord'
defineProps<{
  records: HistoryRecord<any>
}>()


defineEmits<{
  reuseRecord: [record: any]
}>()

</script>
<style scoped lang="scss">
:deep() {
  .ant-row .ant-col:nth-child(1) {
    font-weight: bold;
  }
}
.record-container {
  list-style: none;
  padding: 8px;
  margin: 16px;
  max-height: 50vh;
  overflow: auto;
}

.record {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--zp-tertiary);
  position: relative;
  flex-wrap: nowrap;
  transition: all .3s ease;

  &:hover {
    background: var(--zp-secondary-background);
  }

  .rec-actions {
    user-select: none;
    display: flex;
    gap: 8px;
  }

  .pin {
    
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all .3s ease;


    &:hover {
      background: var(--zp-primary-background);
    }
  }
}
</style>