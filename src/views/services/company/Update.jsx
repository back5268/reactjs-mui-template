import { useGetApi } from '@/hooks';
import { addCompanyApi, detailCompanyApi, updateCompanyApi } from '@api';
import { FormInput, SubCard, FormUpdateDialog, FormSelect, FormSwitch } from '@components';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { removeEqualPropObject } from '@utils';

const defaultValues = { name: '', code: '', my_service_id: '', status: true };
const Update = (props) => {
  const { visibled, setVisibled, setParams, myServices } = props;
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues
  });
  const detail = useGetApi(detailCompanyApi, { id: visibled }, {});

  useEffect(() => {
    if (typeof visibled === 'number') {
      for (const key in defaultValues) {
        if (Object.hasOwnProperty.call(defaultValues, key)) {
          if (key === 'status') setValue('status', detail.status === 1);
          else setValue(key, detail[key] + '' || '');
        }
      }
    }
  }, [JSON.stringify(detail)]);

  const handleData = (info) => {
    info.status = info.status ? 1 : 0;
    if (typeof visibled === 'number') return { ...removeEqualPropObject(info, detail), id: visibled };
    else return info;
  };

  return (
    <FormUpdateDialog
      checked={typeof visibled === 'number'}
      title="công ty"
      visibled={visibled}
      setVisibled={setVisibled}
      setParams={setParams}
      handleSubmit={handleSubmit}
      actions={{ add: addCompanyApi, update: updateCompanyApi }}
      handleData={handleData}
      handleSuccess={() => {
        setParams((pre) => ({ ...pre, render: !pre.render }));
        reset(defaultValues);
      }}
    >
      <SubCard>
        <Grid container spacing={2}>
          <FormInput id="name" label="Tên công ty (*)" register={register} errors={errors} required />
          <FormInput id="code" label="Mã công ty (*)" register={register} errors={errors} required />
          <FormSelect
            id="my_service_id"
            label="Ứng dụng (*)"
            options={myServices}
            value={watch('my_service_id')}
            register={register}
            errors={errors}
            required
          />
          <FormSwitch checked={watch('status')} id="status" register={register} />
        </Grid>
      </SubCard>
    </FormUpdateDialog>
  );
};

export default Update;
